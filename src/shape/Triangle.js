import React, {PropTypes} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

const Rectangle = React.createClass({

  mixins: [PureRenderMixin],

  propTypes: {
    points: PropTypes.arrayOf(PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number
    })),
    radius: PropTypes.number,
    fill: PropTypes.string,
    stroke: PropTypes.string,
    strokeWidth: PropTypes.number,
    strokeDasharray: PropTypes.string,
    className: PropTypes.string,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onClick: PropTypes.func
  },

  getDefaultProps () {
    return {
      radius: 0,
      stroke: 'none',
      strokeWidth: 1,
      strokeDasharray: 'none',
      fill: '#000',
      onMouseEnter () {},
      onMouseLeave () {},
      onClick () {}
    };
  },

  getPath (points, radius) {
    if (!points || !points.length) {return ;}

    const ary = points.map(entry => entry.x + ' ' + entry.y);

    return 'M' + ary.join('L') + 'Z';
  },

  render () {
    let {points, radius,onClick,
        onMouseEnter, onMouseLeave,
        className, ...others} = this.props;

    return (
      <path
        {...others}
        className={'recharts-triangle ' + (className || '')}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        d={this.getPath(points, radius)}/>
    );
  }
});

export default Rectangle;