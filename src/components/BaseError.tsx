import { Typography } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import psyduckComputerImg from "../assets/images/psyduck_computer.jpg";
import i18n from "../i18n";

const BaseError = () => {
  const { t } = i18n;
  return (
    <>
      <Typography variant='h1' className='mb-2'>
        {t("error")}
      </Typography>
      <LazyLoadImage
        src={psyduckComputerImg}
        width='100%'
        alt={`${t("alt.psyduckComputer")}`}
      />
    </>
  );
};

export default BaseError;
