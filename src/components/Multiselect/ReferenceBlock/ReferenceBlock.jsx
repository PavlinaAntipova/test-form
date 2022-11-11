import { StyledReferenceBlock } from './ReferenceBlock.styled';

const ReferenceBlock = ({ referense, children }) => {
    return <StyledReferenceBlock ref={referense}>
       {children}
    </StyledReferenceBlock>
}

export default ReferenceBlock;