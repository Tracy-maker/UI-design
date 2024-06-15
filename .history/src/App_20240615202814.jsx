const App = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Shop />
    </Canvas>
  );
};

export default App;