import { gatsbyListItemStyles } from '../../listItem/gatsby';
export default (function () {
  return {
    root: {
      position: 'relative'
    },
    listItem: gatsbyListItemStyles().root,
    listItemSelected: {
      color: 'rgb(138, 75, 175)',
      fontWeight: 500,
      '&:after': {
        width: 'calc(0.5rem + 8px)',
        background: 'rgb(138, 75, 175)',
        transform: 'translateX(0)'
      }
    },
    action: {
      minWidth: 48,
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      color: 'rgba(0, 0, 0, 0.54)',
      '&:hover, &:focus': {
        color: '#663399',
        background: 'rgba(241,222,250,0.15)'
      },
      '& svg': {
        fontSize: '1.25rem'
      },
      '&:not($actionButton)': {
        position: 'static',
        marginLeft: 'auto',
        marginRight: -36,
        minWidth: 'auto',
        lineHeight: 1
      }
    },
    actionButton: {},
    actionToggled: {
      color: '#663399'
    }
  };
});