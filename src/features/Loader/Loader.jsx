import { PulseLoader } from 'react-spinners';
import LoadingOverlay from 'react-loading-overlay';
import { css } from '@emotion/css';

export const Loader = () => {
    const overlay = css`
        min-height: 400px;
        position: relative;
    `;

const loader = css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 900;
`;

  return (
    <LoadingOverlay className={overlay} active={true}>
        <PulseLoader className={loader} speedMultiplier={.8} color="#e81c24" />
    </LoadingOverlay>  
  )
}
