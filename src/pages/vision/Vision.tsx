import React from "react";

interface VisionProps {};

type Props = VisionProps;

export class Vision extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p className="header">Welcome to New Perspectives Network</p>
      </div>
    );
  }
}

export default Vision;
