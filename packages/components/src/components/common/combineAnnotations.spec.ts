import { combineAnnotations } from './combineAnnotations';
import { TIME_SERIES_DATA_WITH_ALARMS } from '@iot-app-kit/source-iotsitewise';

it('correctly combines annotations annotations', () => {
  const combinedAnnotations = combineAnnotations(
    {
      colorDataAcrossThresholds: true,
      show: true,
      thresholdOptions: true,
    },
    {
      y: TIME_SERIES_DATA_WITH_ALARMS.annotations.y,
    }
  );

  expect(combinedAnnotations).toEqual({
    colorDataAcrossThresholds: true,
    show: true,
    thresholdOptions: true,
    y: TIME_SERIES_DATA_WITH_ALARMS.annotations.y,
  });
});