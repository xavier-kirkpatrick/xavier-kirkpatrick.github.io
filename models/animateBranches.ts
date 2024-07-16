export interface AnimateBranchesType {
  hidden: {
    pathLength: number;
    opacity: number;
  };
  visible: (i: number) => {
    pathLength: number;
    opacity: number;
    transition: {
      pathLength: {
        delay: number;
        type: string;
        duration: number;
        bounce: number;
      };
      opacity: { delay: number; duration: number };
    };
  };
}
