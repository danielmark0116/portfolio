import * as React from 'react';

interface IProps {
  handleChange(e: React.FormEvent<HTMLInputElement>): void;
  inputValue: string;
}

export default class Input extends React.Component<IProps, {}> {
  render() {
    const { handleChange, inputValue } = this.props;

    return (
      <div>
        <input
          value={inputValue}
          type="text"
          name="inputValue"
          onChange={handleChange}
        />
      </div>
    );
  }
}
