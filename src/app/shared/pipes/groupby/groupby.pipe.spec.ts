import { GroupbyPipe } from './groupby.pipe';

xdescribe('GroupbyPipe', () => {
  it('create an instance', () => {
    const pipe = new GroupbyPipe();
    expect(pipe).toBeTruthy();
  });
});
