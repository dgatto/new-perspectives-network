import React from "react";

interface CommunityProps {};

type Props = CommunityProps;

export class Community extends React.Component<Props> {
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

export default Community;
