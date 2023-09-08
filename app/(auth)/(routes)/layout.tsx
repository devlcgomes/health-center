const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" border-4 border-sky-300 flex items-center justify-center h-full">
      {children}
    </div>
  );
};
export default AuthLayout;
