import React from 'react';

import { Table } from '@iot-app-kit/react-components';

import { DashboardPlugin } from '../api';
import { useDataSource } from '../hooks/useDataSource';
import { useSelector } from 'react-redux';
import { DashboardState } from '~/store/state';
import MultiQueryWidget from './queryWidget/multiQueryWidget';
import { TableWidget } from './types';
import { computeQueryConfigKey } from './utils/computeQueryConfigKey';

const TableWidgetComponent: React.FC<TableWidget> = (widget) => {
  const viewport = useSelector((state: DashboardState) => state.dashboardConfiguration.viewport);

  const { queryConfig } = widget.properties;

  const { dataSource } = useDataSource();
  const queries = dataSource.query && queryConfig.query ? [dataSource.query?.timeSeriesData(queryConfig.query)] : [];
  const key = computeQueryConfigKey(viewport, widget.properties.queryConfig);

  // Need to map in columns / items
  return <Table key={key} queries={queries} viewport={viewport} columnDefinitions={[]} items={[]} />;
};

const TableIcon: React.FC = () => (
  <svg viewBox='0 0 48 48' xmlns='http://www.w3.org/2000/svg' className='palette-component-icon'>
    <path
      d='M14.242 30.667h-3.394c-.468 0-.848.398-.848.889v3.555c0 .491.38.889.848.889h3.394c.469 0 .849-.398.849-.889v-3.555c0-.491-.38-.89-.849-.89zm0-18.667h-3.394c-.468 0-.848.398-.848.889v3.555c0 .491.38.89.848.89h3.394c.469 0 .849-.399.849-.89V12.89c0-.491-.38-.889-.849-.889zm0 8.889h-3.394c-.468 0-.848.398-.848.889v3.555c0 .491.38.89.848.89h3.394c.469 0 .849-.399.849-.89v-3.555c0-.491-.38-.89-.849-.89zm22.91 10.667h-16.97c-.469 0-.849.398-.849.888v1.778c0 .491.38.89.849.89h16.97c.468 0 .848-.399.848-.89v-1.778c0-.49-.38-.888-.848-.888zm0-18.667h-16.97c-.469 0-.849.398-.849.889v1.778c0 .49.38.888.849.888h16.97c.468 0 .848-.398.848-.888v-1.778c0-.491-.38-.89-.848-.89zm0 8.889h-16.97c-.469 0-.849.398-.849.889v1.777c0 .491.38.89.849.89h16.97c.468 0 .848-.399.848-.89v-1.777c0-.491-.38-.89-.848-.89z'
      fill='inherit'
    ></path>
  </svg>
);

export const tablePlugin: DashboardPlugin = {
  install: ({ registerWidget }) => {
    registerWidget<TableWidget>('iot-table', {
      render: (widget) => (
        <MultiQueryWidget {...widget}>
          <TableWidgetComponent {...widget} />
        </MultiQueryWidget>
      ),
      componentLibrary: {
        name: 'Table',
        icon: TableIcon,
      },
      properties: () => ({
        queryConfig: {
          source: 'iotsitewise',
          query: undefined,
        },
      }),
      initialSize: {
        height: 170,
        width: 270,
      },
    });
  },
};