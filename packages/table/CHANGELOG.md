# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.3.0](https://github.com/awslabs/iot-app-kit/compare/table-v2.2.0...table-v2.3.0) (2022-11-02)


### Bug Fixes

* **deps:** update synchro-charts, node-sass, nth-check ([#295](https://github.com/awslabs/iot-app-kit/issues/295)) ([016c216](https://github.com/awslabs/iot-app-kit/commit/016c216c2934d150f94e595d3ebb34aaafa69e27))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @iot-app-kit/core bumped from ^2.2.0 to ^2.3.0

## 2.2.0 (2022-10-21)

### Features

* source-iotsitewise, core, components:
  * Introduce alarms support ([9bc221e](https://github.com/awslabs/iot-app-kit/commit/9bc221ef19fc5a9db4360c1d124f41e7b0d896be))

* react-components, scene-composer:
  * EnvironmentModelComponent for Adding support for environment overlay ([eb91179](https://github.com/awslabs/iot-app-kit/commit/eb911799e555c07c535853661e93237969159ff0))

* core, components:
  * Support viewport grouping in iot-table ([be5b588](https://github.com/awslabs/iot-app-kit/commit/be5b588a90ec267a2c8cdce24bdea86b45c97136))

* scene-composer:
  * Removes the dependency on the feature flag for the top bar camera drowpdown ([fb8e333](https://github.com/awslabs/iot-app-kit/commit/fb8e3330cc4f4933ccd6f9cde32b1d4694897358))
  * Add flag to resizable tags ([560e1b1](https://github.com/awslabs/iot-app-kit/commit/560e1b1a2db0f60700b7246626c71f1bc05f49e1))

### Bug Fixes

* scene-composer:
  * Camera Component Editor for Lens and Clipping planes updates when changing between cameras ([94c5978](https://github.com/awslabs/iot-app-kit/commit/94c59786aae02a4c9fd088cfc6c9cea516880f3c))
  * improve ViewCursorWidget performance ([58b70bd](https://github.com/awslabs/iot-app-kit/commit/58b70bdc82cd1e4bbcc0c0e7f66bfef3f064e86b))
  * Allows user to hit Esc key to cancel Enhanced Editing ([9c1b9e6](https://github.com/awslabs/iot-app-kit/commit/9c1b9e64c725671adb0766d1c080297389385fd8))
  * selectedDataBinding not able to update selected node ([b23bce2](https://github.com/awslabs/iot-app-kit/commit/b23bce279b81496583c052a0dc69ac9be5994643))
  * use arrow data as texture to avoid public path issue ([0d2e427](https://github.com/awslabs/iot-app-kit/commit/0d2e427354cbd3c0678d579ceaffab84e5e88e5c))
  * fix show svg ([cb6094e](https://github.com/awslabs/iot-app-kit/commit/cb6094e724465ccc11d9f7ae7f7fe3179d4d2596))
  * fix adding tag always attached to root ([775446a](https://github.com/awslabs/iot-app-kit/commit/775446a210877780c2a220092e6b0210edc7ea2c))
  * Fix the tag scaling with parent scale regression ([4483140](https://github.com/awslabs/iot-app-kit/commit/448314018882912a49c8522786bc8ae3c964b7aa))
  * SceneHierarchy Tree Performance ([c74d1dc](https://github.com/awslabs/iot-app-kit/commit/c74d1dc8be97135529d55e994834e7dd3f352ee8))
  * Minimum FOV check introduced ([720b8e8](https://github.com/awslabs/iot-app-kit/commit/720b8e85d3b8329c898638030e32ad1e910c4e62))
  * Fix the camera zoom field locked to 1 or greater ([cada75e](https://github.com/awslabs/iot-app-kit/commit/cada75ec32c81312bf5ee403f10bbf4567c30c05))
  * Add success popup message when updating camera location ([4af9c07](https://github.com/awslabs/iot-app-kit/commit/4af9c0758c8adc04f35c80fae2f39b60460e903a))
  * Update the text from Cameras in the drop down to Camera View ([5687f5e](https://github.com/awslabs/iot-app-kit/commit/5687f5efc38dabbd0ec06ccc5e395576fa3d57e4))
  * fix model shader material color restore ([0786c4a](https://github.com/awslabs/iot-app-kit/commit/0786c4a038cbe93be8a4d7a4b2f7a57bfacd76c2))
  * CSS updates to Scene Hierarchy ([ab3c749](https://github.com/awslabs/iot-app-kit/commit/ab3c7490add7338611533e6b68cecefe0f9cb3a1))

* core:
  * add currentTime param to viewportStartDate and `viewportEndDate` ([eb02085](https://github.com/awslabs/iot-app-kit/commit/eb02085fd3b0aa987c38278cedc8eba0e56d9fa9))

* react-components:
  * fix propertiesNotChanged for videoPlayer ([9a360b1](https://github.com/awslabs/iot-app-kit/commit/9a360b10fc87b2e31b4c6a00d9e49a5224e207d0))

### Documentation

* Updating scene-composer documentation for Storybook ([901ff53](https://github.com/awslabs/iot-app-kit/commit/901ff53efc86d0c68f0cbc15dc7be9dfc00b0243))
* add TwinMaker components to GettingStarted doc ([84e9fdf](https://github.com/awslabs/iot-app-kit/commit/84e9fdfb3b1af3c47343a91ca1259e5e45f1eaac))

### Miscellaneous

* reduce concurrent workers in testing ([e8d6dbc](https://github.com/awslabs/iot-app-kit/commit/e8d6dbcac3f3e2e503e02db0087d5db324e9b521))
* easier linking for iot-app-kit packages ([44d454d](https://github.com/awslabs/iot-app-kit/commit/44d454d955e22581228d3d77829b8ad27a24fd52))

## 2.1.0 (2022-09-30)

### Features

* react-components:
  * add VideoPlayer and RequestVideoUpload components ([f08c541](https://github.com/awslabs/iot-app-kit/commit/f08c541f017f4bbefae085e45c2ef2e686eb5919))
* scene-composer:
  * add SceneViewer component ([f08c541](https://github.com/awslabs/iot-app-kit/commit/f08c541f017f4bbefae085e45c2ef2e686eb5919))
* source-iottwinmaker:
  * add source-iottwinmaker module ([f08c541](https://github.com/awslabs/iot-app-kit/commit/f08c541f017f4bbefae085e45c2ef2e686eb5919))

### Bug Fixes

* components:
  * import missing CSS style sheets. ([f2450bc](https://github.com/awslabs/iot-app-kit/commit/f2450bc17906bff2ad4ac065eb26b36726d530d6))

### Documentation

* add SceneViewer, VideoPlayer and AWSIoTTwinMakerSource documentation and link to main ([f08c541](https://github.com/awslabs/iot-app-kit/commit/f08c541f017f4bbefae085e45c2ef2e686eb5919) & [71e59be](https://github.com/awslabs/iot-app-kit/commit/71e59be2ad0abcabb9136cf88c3c6c1d16606390))
* doc: update link in Coding Guidelines ([ea041cd](https://github.com/awslabs/iot-app-kit/commit/ea041cd8aadcb65b08c5bc09e6baf2958dbbdd35))

### Miscellaneous

* update react / react-dom versions from >=16 to ^17 ([f08c541](https://github.com/awslabs/iot-app-kit/commit/f08c541f017f4bbefae085e45c2ef2e686eb5919))
* update jest versions from 28 to 27 to be consistent with other modules ([f08c541](https://github.com/awslabs/iot-app-kit/commit/f08c541f017f4bbefae085e45c2ef2e686eb5919))


## 2.0.0 (2022-09-14)

### Features
* introduce new table component supporting filtering and sorting. ([c75d4f0](https://github.com/awslabs/iot-app-kit/commit/c75d4f05b64c801c06ba45acd3b5df2fb7d2e30a))

### Miscellaneous
* Migrate to NPM workspaces ([8e200be](https://github.com/awslabs/iot-app-kit/commit/8e200be0401fe6fa989cbf9a1ad96aafd8305a96))