import { ReactComponent as NoData } from '../../assets/emptyData2.svg';
import Typography from '../Typography';
type Props = {
  message?: string;
  height?: number;
};
const EmptyData = ({ message, height }: Props) => {
  return (
    <div>
      <NoData height={height} />
      <div
        style={{
          textAlign: 'center',
        }}
      >
        <Typography variant="title" fontColor="secondary">
          {message}
        </Typography>
      </div>
    </div>
  );
};

export default EmptyData;
