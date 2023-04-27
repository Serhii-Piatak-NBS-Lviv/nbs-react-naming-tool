import { cx } from '@emotion/css';

import useThemify from '../../app/hooks/useThemify';
const SectionHeader = ({title, subTitle}) => {

    const [mainTitle, overrideMainTitle, isMainTitleOverriden] = useThemify('filters-title');
    const [underline, overrideUnderline, isUnderlineOverriden] = useThemify('filters-heading-underline');
    const [mainSubtitle, overrideMainSubtitle, isMainSubtitleOverriden] = useThemify('filters-subtitle');    

  return (
    <>
        <h2 className={cx(
            { [mainTitle]: true },
            { [overrideMainTitle]: isMainTitleOverriden }
        )}>
            {title}
        </h2>
        <span className={cx(
            { [underline]: true },
            { [overrideUnderline]: isUnderlineOverriden }
        )}/>
        <p className={cx(
            { [mainSubtitle]: true },
            { [overrideMainSubtitle]: isMainSubtitleOverriden }
        )}>
            {subTitle}
        </p>
    </>    
  )
}

export default SectionHeader;
