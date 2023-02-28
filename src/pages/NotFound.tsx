import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import i18n from "../i18n";

const NotFound = () => {
  const { t } = i18n;
  return (
    <div className='text-center'>
      <Typography variant='h2' className='mb-8'>
        {t("pageNotFound")}
      </Typography>
      <Button to='/' component={Link}>
        {t("backHome")}
      </Button>
    </div>
  );
};

export default NotFound;
