import { useTheme } from '@hooks/useTheme';
import useTranslation from 'next-translate/useTranslation';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { Label, SwitchRoot, SwitchThumb } from './styles';

type ThemeSwitchProps = {
  showLabel?: boolean;
  bg?: string;
};

export function ThemeSwitch({ showLabel = true, bg }: ThemeSwitchProps) {
  const { title, colors, toggleTheme } = useTheme();
  const { t } = useTranslation('common');
  const isDark = title === 'dark';

  return (
    <div>
      {showLabel && (
        <Label htmlFor="theme-switch">{isDark ? t('dark') : t('light')}</Label>
      )}
      <SwitchRoot
        background={bg}
        checked={isDark}
        id="theme-switch"
        onClick={toggleTheme}
      >
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
