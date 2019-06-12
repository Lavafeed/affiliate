import Link from 'next/link';

export default ({ to, target, children, className, style, onClick }) => (
  <Link href={to}>
    <a
      href={to}
      target={target}
      className={className}
      onClick={onClick}
      style={style}
    >
      {children}
    </a>
  </Link>
);
