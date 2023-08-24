import Court from 'components/Home/atoms/BadmintonCourt';
import BasketBallCourt from 'components/Home/atoms/BasketBallCourt';
import { Palette } from 'styles/globals';
import { Layer } from './style';

const CourtList = () => {
  const day = new Date().getDay();

  return (
    <Layer>
      {day === 1 || day === 3 ? (
        <>
          <BasketBallCourt left={Palette.NEUTRAL_N3} right={Palette.SUB_RED} />
          <BasketBallCourt
            left={Palette.SUB_GREEN}
            right={Palette.NEUTRAL_N3}
          />
        </>
      ) : day === 2 || day === 4 ? (
        <>
          <Court top={Palette.NEUTRAL_N3} bottom={Palette.NEUTRAL_N3} />
          <Court top={Palette.SUB_RED} bottom={Palette.SUB_GREEN} />
          <Court top={Palette.SUB_RED} bottom={Palette.NEUTRAL_N3} />
          <Court top={Palette.SUB_RED} bottom={Palette.SUB_RED} />
        </>
      ) : (
        <>
          <BasketBallCourt left={Palette.NEUTRAL_N3} right={Palette.SUB_RED} />
          <Court top={Palette.SUB_RED} bottom={Palette.NEUTRAL_N3} />
          <Court top={Palette.SUB_RED} bottom={Palette.SUB_RED} />
        </>
      )}
    </Layer>
  );
};

export default CourtList;
