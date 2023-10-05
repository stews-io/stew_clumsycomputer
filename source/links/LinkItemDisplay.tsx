import { ComponentChildren } from "preact";
import { LinkButton } from "stew/components";
import { SegmentItemDisplayProps } from "stew/config";
import { LinkItem } from "./LinkItem.ts";
// @deno-types="CssModule"
import cssModule from "./LinkItemDisplay.module.scss";

export interface LinkItemDisplayProps
  extends SegmentItemDisplayProps<LinkItem> {}

export function LinkItemDisplay(props: LinkItemDisplayProps) {
  const { someSegmentItem } = props;
  return (
    <div className={cssModule.itemDisplayContainer}>
      <div className={cssModule.titleButtonContainer}>
        <LinkButton
          href={someSegmentItem.linkHref}
          ariaLabel={"todo"}
          ariaDescription={"todo"}
          target={"_blank"}
        >
          <div className={cssModule.titleText}>
            {someSegmentItem.linkTitle.toLocaleLowerCase()}
          </div>
        </LinkButton>
      </div>
      <div className={cssModule.itemLabelsContainer}>
        {someSegmentItem.linkAuthor.map((someLinkAuthor) => (
          <ItemStickerContainer>
            <ItemSticker>
              <ItemLabel>{someLinkAuthor.toLocaleLowerCase()}</ItemLabel>
            </ItemSticker>
          </ItemStickerContainer>
        ))}
        {someSegmentItem.linkTags.map((someLinkTag) => (
          <ItemStickerContainer>
            <ItemSticker>
              <ItemLabel>{someLinkTag}</ItemLabel>
            </ItemSticker>
          </ItemStickerContainer>
        ))}
        {someSegmentItem.secondaryLinks.map((someSecondaryLink) => (
          <ItemStickerContainer>
            <LinkButton
              href={someSecondaryLink.linkHref}
              ariaLabel={"todo"}
              ariaDescription={"todo"}
              target={"_blank"}
            >
              <ItemSticker>
                <ItemLabel>
                  {someSecondaryLink.linkLabel.toLocaleLowerCase()}
                </ItemLabel>
                <svg
                  className={cssModule.secondaryLinkIcon}
                  viewBox={"0 0 24 24"}
                >
                  <path
                    d={
                      "M18 19H6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h5c.55 0 1-.45 1-1s-.45-1-1-1H5c-1.11 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55-.45 1-1 1zM14 4c0 .55.45 1 1 1h2.59l-9.13 9.13c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L19 6.41V9c0 .55.45 1 1 1s1-.45 1-1V4c0-.55-.45-1-1-1h-5c-.55 0-1 .45-1 1z"
                    }
                  />
                </svg>
              </ItemSticker>
            </LinkButton>
          </ItemStickerContainer>
        ))}
      </div>
    </div>
  );
}

interface ItemStickerContainerProps {
  children: ComponentChildren;
}

function ItemStickerContainer(props: ItemStickerContainerProps) {
  const { children } = props;
  return <div className={cssModule.itemStickerContainer}>{children}</div>;
}

interface ItemStickerProps {
  children: ComponentChildren;
}

function ItemSticker(props: ItemStickerProps) {
  const { children } = props;
  return <div className={cssModule.itemSticker}>{children}</div>;
}

interface ItemLabelProps {
  children: ComponentChildren;
}

function ItemLabel(props: ItemLabelProps) {
  const { children } = props;
  return <div className={cssModule.itemLabelText}>{children}</div>;
}