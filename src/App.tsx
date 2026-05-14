import MysticProvider from "./providers/MysticProvider";

const App = () => {
  return (
    <MysticProvider>
      <div>
        <h1 className="text-2xl font-rune text-eldritch">
          Welcome, This is app component
        </h1>
      </div>
    </MysticProvider>
  );
};

export default App;
