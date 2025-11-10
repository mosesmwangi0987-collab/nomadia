const Button = ({ children, variant = "primary" }) => {
  const base = "px-6 py-3 rounded-full font-semibold transition duration-300";

  const styles = {
    primary: base + " bg-blue-600 text-white hover:bg-blue-700",
    secondary: base + " border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white",
  };

  return <button className={styles[variant]}>{children}</button>;
};

export default Button;
