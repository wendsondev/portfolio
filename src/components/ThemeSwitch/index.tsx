import { useTheme } from '@hooks/useTheme';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { Label, SwitchRoot, SwitchThumb } from './styles';

export function ThemeSwitch() {
  const { title, colors, toggleTheme } = useTheme();
  const isDark = title === 'dark';

  return (
    <div>
      <Label className="Label" htmlFor="theme-switch">
        {title} theme
      </Label>
      <SwitchRoot checked={isDark} id="theme-switch" onClick={toggleTheme}>
        <SwitchThumb>
          {isDark ? (
            <MdDarkMode color={colors.background.primary} size={46} />
          ) : (
            <MdLightMode color={colors.background.primary} size={38} />
          )}
        </SwitchThumb>
      </SwitchRoot>
    </div>
  );
}
