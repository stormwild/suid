import { ModalProps, ModalTypeMap } from "../Modal";
import { PaperProps } from "../Paper";
import { Theme } from "../styles";
import { TransitionProps } from "../transitions/transition";
import { PopoverClasses } from "./popoverClasses";
import { SxProps } from "@suid/system";
import * as ST from "@suid/types";
import { JSXElement, Component } from "solid-js";

export interface PopoverOrigin {
  vertical: "top" | "center" | "bottom" | number;
  horizontal: "left" | "center" | "right" | number;
}

export interface PopoverPosition {
  top: number;
  left: number;
}

export type PopoverReference = "anchorEl" | "anchorPosition" | "none";

export interface PopoverActions {
  updatePosition(): void;
}
export type PopoverTypeMap<P = {}, D extends ST.ElementType = "div"> = {
  name: "MuiPopover";
  defaultPropNames:
    | "anchorOrigin"
    | "anchorReference"
    | "elevation"
    | "marginThreshold"
    | "PaperProps"
    | "transformOrigin"
    | "TransitionComponent"
    | "transitionDuration"
    | "TransitionProps";
  selfProps: {
    /**
     * A ref for imperative actions.
     * It currently only supports updatePosition() action.
     */
    action?: ST.Ref<PopoverActions>;

    /**
     * An HTML element, or a function that returns one.
     * It's used to set the position of the popover.
     */
    anchorEl?: null | Element | ((element: Element) => Element);

    /**
     * This is the point on the anchor where the popover's
     * `anchorEl` will attach to. This is not used when the
     * anchorReference is 'anchorPosition'.
     *
     * Options:
     * vertical: [top, center, bottom];
     * horizontal: [left, center, right].
     * @default {
     *   vertical: 'top',
     *   horizontal: 'left',
     * }
     */
    anchorOrigin?: PopoverOrigin;

    /**
     * This is the position that may be used to set the position of the popover.
     * The coordinates are relative to the application's client area.
     */
    anchorPosition?: PopoverPosition;

    /**
     * This determines which anchor prop to refer to when setting
     * the position of the popover.
     * @default 'anchorEl'
     */
    anchorReference?: PopoverReference;

    /**
     * The content of the component.
     */
    children?: JSXElement;

    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<PopoverClasses>;

    /**
     * An HTML element, component instance, or function that returns either.
     * The `container` will passed to the Modal component.
     *
     * By default, it uses the body of the anchorEl's top-level document object,
     * so it's simply `document.body` most of the time.
     */
    container?: ModalProps["container"];

    /**
     * The elevation of the popover.
     * @default 8
     */
    elevation?: number;

    /**
     * Specifies how close to the edge of the window the popover can appear.
     * @default 16
     */
    marginThreshold?: number;

    onClose?: ModalProps["onClose"];

    /**
     * If `true`, the component is shown.
     */
    open: boolean;

    /**
     * Props applied to the [`Paper`](/api/paper/) element.
     * @default {}
     */
    PaperProps?: Partial<PaperProps>;

    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;

    /**
     * This is the point on the popover which
     * will attach to the anchor's origin.
     *
     * Options:
     * vertical: [top, center, bottom, x(px)];
     * horizontal: [left, center, right, x(px)].
     * @default {
     *   vertical: 'top',
     *   horizontal: 'left',
     * }
     */
    transformOrigin?: PopoverOrigin;

    /**
     * The component used for the transition.
     * [Follow this guide](/components/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
     * @default Grow
     */
    TransitionComponent?: Component<TransitionProps & { children: JSXElement }>;

    /**
     * Set to 'auto' to automatically calculate transition time based on height.
     * @default 'auto'
     */
    transitionDuration?: TransitionProps["timeout"] | "auto";

    /**
     * Props applied to the transition element.
     * By default, the element is based on this [`Transition`](http://reactcommunity.org/react-transition-group/transition/) component.
     * @default {}
     */
    TransitionProps?: TransitionProps;
  };
  props: P &
    PopoverTypeMap["selfProps"] &
    Omit<ModalTypeMap["props"], "children">;
  defaultComponent: D;
};

export type PopoverProps<
  D extends ST.ElementType = PopoverTypeMap["defaultComponent"],
  P = {}
> = ST.OverrideProps<PopoverTypeMap<P, D>, D>;

export default PopoverProps;
