import Court from 'components/Home/atoms/Court';
import { Palette } from 'styles/globals';
import { Layer } from './style';

const CourtList = () => {
  return (
    <Layer>
      <Court top={Palette.NEUTRAL_N3} bottom={Palette.NEUTRAL_N3} />
      <Court top={Palette.SUB_RED} bottom={Palette.SUB_GREEN} />
      <Court top={Palette.SUB_RED} bottom={Palette.NEUTRAL_N3} />
      <Court top={Palette.SUB_RED} bottom={Palette.SUB_RED} />
    </Layer>
  );
};

export default CourtList;
