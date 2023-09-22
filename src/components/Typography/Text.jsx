import './Text.css';

export default function Text({
  text,
  type = 'medium',
  color = 'rgb(79, 79, 79)',
}) {
  let style = 'medium';
  switch (type) {
    case 'medium':
      style = 'medium';
      break;
    case 'small':
      style = 'small';
      break;
    case 'x-small':
      style = 'x-small';
      break;
    default:
      style = 'medium';
      break;
  }
  return (
    <h1 className={style} style={{ color: `${color}` }}>
      {text}
    </h1>
  );
}
