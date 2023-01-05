import React, { useContext, useMemo, useRef } from 'react';
import { defineMessages } from '@formatjs/intl';
import { useIntl } from 'react-intl';

import { COMPOSER_FEATURES } from '../../../interfaces';
import useFeature from '../../../hooks/useFeature';
import LogProvider from '../../../logger/react-logger/log-provider';
import { useStore } from '../../../store/Store';
import { sceneComposerIdContext } from '../../../common/sceneComposerIdContext';

import Layout, { Main, Toolbar } from './layout';
import Typeahead from './components/Typeahead';
import SceneHierarchyTree from './components/SceneHierarchyTree';
import SceneHierarchyDataProvider from './SceneHierarchyDataProvider';

const strings = defineMessages({
  searchPlaceholder: {
    defaultMessage: 'Find resources',
    description: 'Placeholder hint message for searching across entities',
  },
});

const SceneHierarchyPanel = () => {
  const { formatMessage } = useIntl();

  const sceneComposerId = useContext(sceneComposerIdContext);
  const getSceneNodeByRef = useStore(sceneComposerId)((state) => state.getSceneNodeByRef);
  const selectedSceneNodeRef = useStore(sceneComposerId)((state) => state.selectedSceneNodeRef);

  const [{ variation: canSearchHierarchy }] = useFeature(COMPOSER_FEATURES[COMPOSER_FEATURES.SceneHierarchySearch]);
  const [{ variation: canReorderHierarchy }] = useFeature(COMPOSER_FEATURES[COMPOSER_FEATURES.SceneHierarchyReorder]);
  const [{ variation: canSelectMultiple }] = useFeature(COMPOSER_FEATURES[COMPOSER_FEATURES.SceneHierarchyMultiSelect]);

  const expandedNodes = useRef<string[]>([]);
  /**
   * List of nodes to expand based on the selected node
   * If the selected node changes, update the existing list
   * */
  const nodesToExpand = useMemo(() => {
    let currentNode = getSceneNodeByRef(selectedSceneNodeRef);
    const pathToRoot: string[] = [];
    while (currentNode) {
      currentNode = getSceneNodeByRef(currentNode.parentRef);
      if (currentNode && pathToRoot.indexOf(currentNode.ref) === -1) {
        pathToRoot.push(currentNode.ref);
      }
    }
    pathToRoot.forEach((node) => {
      if (expandedNodes.current.indexOf(node) === -1) {
        expandedNodes.current.push(node);
      }
    });
    return expandedNodes.current;
  }, [selectedSceneNodeRef, getSceneNodeByRef]);

  return (
    <LogProvider namespace='SceneHierarchyPanel'>
      <SceneHierarchyDataProvider selectionMode={canSelectMultiple === 'T1' ? 'multi' : 'single'}>
        <Layout>
          {canSearchHierarchy === 'T1' && (
            <Toolbar>
              <Typeahead placeholder={formatMessage(strings.searchPlaceholder)} />
            </Toolbar>
          )}
          <Main>
            <SceneHierarchyTree enableDragAndDrop={canReorderHierarchy === 'T1'} nodesToExpand={nodesToExpand} />
          </Main>
        </Layout>
      </SceneHierarchyDataProvider>
    </LogProvider>
  );
};

SceneHierarchyPanel.displayName = 'SceneHierarchyPanel';

export default SceneHierarchyPanel;
