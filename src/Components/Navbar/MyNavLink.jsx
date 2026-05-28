import Link from "next/link";

const MyNavLink = ({ href, pathName, children, className }) => {
  return (
    <>
      <li>
        <Link
          href={href}
          className={`${pathName === href ? "text-[#5C53FE] font-bold" : ""} ${className}`}
        >
          {children}
        </Link>
      </li>
    </>
  );
};

export default MyNavLink;
