export const block = {
  display: 'flex',
  placeItems: 'center',
  justifyContent: 'center',
  marginBottom: '-0.33em'
};

export const image = {
  image: {
    width: '100%',
    objectFit: 'fill'
  }
};

export const title = (color) => ({
  position: 'absolute',
  color: color,
  fontSize: '4em',
  textShadow: '1px 2px darkslategray'
});