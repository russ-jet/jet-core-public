declare module "react-globe.gl" {
  import type { ForwardRefExoticComponent, RefAttributes } from "react";

  const Globe: ForwardRefExoticComponent<Record<string, unknown> & RefAttributes<unknown>>;

  export default Globe;
}
