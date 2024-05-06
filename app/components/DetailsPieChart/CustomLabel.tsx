import { ReactNode, SVGProps } from "react";
import { ContentType, LabelPosition } from "recharts/types/component/Label";
import { ViewBox } from "recharts/types/util/types";
import { getGradientID } from "./utils";

interface Function {
  [Symbol.metadata]: DecoratorMetadata | null;
}

interface LabelProps {
  viewBox?: ViewBox;
  parentViewBox?: ViewBox;
  // eslint-disable-next-line @typescript-eslint/ban-types
  formatter?: Function;
  value?: number | string;
  offset?: number;
  position?: LabelPosition;
  children?: ReactNode;
  className?: string;
  content?: ContentType;
  textBreakAll?: boolean;
  angle?: number;
  index?: number;
}

type Props = Omit<SVGProps<SVGTextElement>, "viewBox"> & LabelProps;
type ConsumedContext = {
  payload: unknown;
  endAngle: number;
  outerRadius: number;
  percent: number;
  x: number;
  y: number;
};

const RADIAN = Math.PI / 180;

function CustomPieChartLabel(props: Props) {
  const { cx, cy, payload, endAngle, outerRadius, percent } = props as Props &
    ConsumedContext;

  if (
    typeof props.x !== "number" ||
    typeof props.y !== "number" ||
    typeof cx !== "number" ||
    typeof cy !== "number"
  ) {
    throw new Error("The custom label component is missing it's context");
  }

  if (
    !payload ||
    typeof payload !== "object" ||
    !("name" in payload) ||
    typeof payload.name !== "string" ||
    !("color" in payload) ||
    typeof payload.color !== "string"
  ) {
    throw new Error("Missing 'name' or 'color' payload");
  }

  const isOnRight = props.x > cx;

  const applyAngleOffset = percent > 0.1;
  let angle = endAngle;

  if (applyAngleOffset) {
    angle -= 20;
  }

  const radius = outerRadius * 1.1;
  const x = cx + radius * Math.cos(-angle * RADIAN);
  const y = cy + radius * Math.sin(-angle * RADIAN);

  const circleOptions = {
    x: x,
    y: y - 2 /* vertically centering the circle */,
    fill: `url(#${getGradientID(payload.color)}`,
    textAnchor: isOnRight ? "start" : "end",
    dominantBaseline: "central",
    children: "⬤",
  };

  const offsetForCircle = 35;

  return (
    <>
      <text
        filter={"drop-shadow( -3px 0px 3px rgba(0, 0, 0, .3))"}
        className="text-[20px] sm:text-[24px] "
        {...circleOptions}
      />
      <text
        className="text-brand whitespace-pre-line fill-petrol-800 text-[14px]"
        x={isOnRight ? x + offsetForCircle : x - offsetForCircle}
        y={y}
        textAnchor={isOnRight ? "start" : "end"}
        dominantBaseline="central"
      >
        {payload.name.split("\n").map((line: string, index: number) => (
          <tspan
            x={isOnRight ? x + offsetForCircle : x - offsetForCircle}
            dy={index === 0 ? 0 : "15"}
            key={line}
          >
            {line}
          </tspan>
        ))}
      </text>
    </>
  );
}

export default CustomPieChartLabel;
