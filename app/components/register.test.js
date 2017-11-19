import Reach from 'react';

cont STATUS = {
    HOVERED: 'hovered';
    NORMAL: 'normal';
};

export default class register extends React.Component{

    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);

        this.state = {
            class: STATUS.NORMAL,
        };
    }
    _onClickFunct() {
    this.setState({class: STATUS.HOVERED});
  }

  render() {
    return (
      <a
        className={this.state.class}
        href={this.props.page || '#'}
        onMouseEnter={this._onMouseEnter}
        onMouseLeave={this._onMouseLeave}>
        {this.props.children}
      </a>
    );
  }
}
