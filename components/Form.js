import { Box, Label, Input, Textarea, Button } from "theme-ui";

function Form() {
  return (
    <Box as="form">
      <Label htmlFor="email">Email</Label>
      <Input name="email" mb={3} />
      <Label htmlFor="password">Message</Label>
      <Textarea name="message" rows="6" mb={3} />
      <Button>Submit</Button>
    </Box>
  );
}

export default Form;
