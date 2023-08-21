import Court from 'components/Home/atoms/Court';
import { Palette } from 'styles/globals';

const CourtList = () => {
  return (
    <div>
      <Court top={Palette.NEUTRAL_N2} bottom={Palette.NEUTRAL_N2} />
      <Court top={Palette.SUB_RED} bottom={Palette.SUB_GREEN} />
      <Court top={Palette.SUB_RED} bottom={Palette.NEUTRAL_N2} />
      <Court top={Palette.SUB_RED} bottom={Palette.SUB_RED} />
    </div>
  );
};

export default CourtList;
