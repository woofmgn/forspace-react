import { Theme, useTheme } from "app/providers/ThemeProvider";
import LightIcon from "shared/assets/icons/theme-dark.svg";
import DarkIcon from "shared/assets/icons/theme-light.svg";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import cls from "./ThemeSwithcer.module.scss";

interface ThemeSwithcerProps {
  className?: string;
}

export const ThemeSwithcer = ({ className }: ThemeSwithcerProps) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames(cls.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? (
        <DarkIcon width={"40px"} height={"40px"} />
      ) : (
        <LightIcon width={"40px"} height={"40px"} />
      )}
    </Button>
  );
};
