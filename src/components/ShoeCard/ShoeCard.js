import React from "react";
import styled from "styled-components/macro";

import { COLORS, WEIGHTS } from "../../constants";
import { formatPrice, pluralize, isNewShoe } from "../../utils";
import Spacer from "../Spacer";

const ShoeCard = ({
    slug,
    name,
    imageSrc,
    price,
    salePrice,
    releaseDate,
    numOfColors,
}) => {
    // There are 3 variants possible, based on the props:
    //   - new-release
    //   - on-sale
    //   - default
    //
    // Any shoe released in the last month will be considered
    // `new-release`. Any shoe with a `salePrice` will be
    // on-sale. In theory, it is possible for a shoe to be
    // both on-sale and new-release, but in this case, `on-sale`
    // will triumph and be the variant used.
    // prettier-ignore
    const variant = typeof salePrice === 'number'
    ? 'on-sale'
    : isNewShoe(releaseDate)
      ? 'new-release'
      : 'default'

    const flagText =
        variant === "on-sale"
            ? "Sale"
            : variant === "new-release"
            ? "Just Released!"
            : "";
    return (
        <Link href={`/shoe/${slug}`}>
            <Wrapper>
                <Flag variant={variant}>{flagText}</Flag>
                <ImageWrapper>
                    <Image alt="" src={imageSrc} />
                </ImageWrapper>
                <Spacer size={12} />
                <Row>
                    <Name>{name}</Name>
                    <Price variant={variant}>{formatPrice(price)}</Price>
                </Row>
                <Row>
                    <ColorInfo>{pluralize("Color", numOfColors)}</ColorInfo>
                    {variant === "on-sale" && (
                        <SalePrice>{formatPrice(salePrice)}</SalePrice>
                    )}
                </Row>
            </Wrapper>
        </Link>
    );
};

const Link = styled.a`
    text-decoration: none;
    color: inherit;
    display: block;
    flex: 1 1 30%;
`;

const Wrapper = styled.article`
    position: relative;
    isolation: isolate;
`;

const Flag = styled.div`
    display: ${({ variant }) => (variant === "default" ? "none" : "block")};
    position: absolute;
    right: -4px;
    top: 12px;
    width: max-content;
    padding: 5px 10px;
    color: white;
    z-index: 1;
    font-size: 14px;
    font-weight: 500;
    border-radius: 2px;
    background-color: ${({ variant }) =>
        variant === "on-sale" ? "#C5295D" : "#6868d9"};
`;

const ImageWrapper = styled.div`
    position: relative;
`;

const Image = styled.img`
    display: block;
    max-width: 100%;
    border-radius: 16px 16px 4px 4px;
`;

const Row = styled.div`
    font-size: 1rem;
    display: flex;
    justify-content: space-between;
`;

const Name = styled.h3`
    font-weight: ${WEIGHTS.medium};
    color: ${COLORS.gray[900]};
`;

const Price = styled.span`
    text-decoration-line: ${({ variant }) =>
        variant === "on-sale" ? "line-through" : "none"};
`;

const ColorInfo = styled.p`
    color: ${COLORS.gray[700]};
`;

const SalePrice = styled.span`
    font-weight: ${WEIGHTS.medium};
    color: ${COLORS.primary};
`;

export default ShoeCard;
