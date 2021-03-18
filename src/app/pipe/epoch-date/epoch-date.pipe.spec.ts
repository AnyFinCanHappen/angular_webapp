import { EpochDatePipe } from './epoch-date.pipe';

describe('EpochDatePipe', () => {
  it('create an instance', () => {
    const pipe = new EpochDatePipe();
    expect(pipe).toBeTruthy();
  });
});
