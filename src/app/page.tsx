import {
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  Paper,
} from "@mui/material";
import styles from "./page.module.css";

export default function Home() {
  return (
    <Container>
      <Paper elevation={3} sx={{ p: 5 }}>
        <h1 className={styles.title}>Welcom to Material UI!</h1>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Label"
          />
          <FormControlLabel required control={<Checkbox />} label="Required" />
          <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
        </FormGroup>
        <hr />
        <Button variant="contained">ボタン</Button>
      </Paper>
    </Container>
  );
}
