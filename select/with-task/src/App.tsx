import { Text, Select, Stack, useComponent } from "@airplane/views";

const App = () => {
  const selectCatState = useComponent("selectCat");

  return (
    <Stack direction="column">
      <Select id="selectCat" data="list_cats" />
      <Text>{JSON.stringify(selectCatState)}</Text>
    </Stack>
  );
};

export default App;
