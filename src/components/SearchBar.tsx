import { TextField } from "@mui/material";
import { FunctionComponent } from "react";
import i18n from "../i18n";
import { DataTest } from "../utils/data-test";

type Props = {
  setSearchQuery: (query: string) => void;
};

const SearchBar: FunctionComponent<Props> = ({ setSearchQuery }) => {
  const { t } = i18n;
  return (
    <form>
      <TextField
        className='mb-8'
        data-test={DataTest.SEARCH_BAR}
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
        label={t("enterPokemon")}
        placeholder={`${t("search")}`}
      />
    </form>
  );
};

export default SearchBar;
