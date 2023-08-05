import { css } from '../../../../styled-system/css';

export const Showcase = () => {
  return (
    <button
      type="button"
      className={css({
        border: '1px solid token(colors.blue.500)',
        borderRadius: 10,
        cursor: 'pointer',
        color: 'white',
        fontSize: 18,
        fontWeight: 600,
        textShadow: '0 1px 2px rgba(29, 78, 216, 0.5)',
      })}
    >
      <span
        className={css({
          display: 'inline-block',
          p: '1px',
          borderRadius: 9,
          background:
            'linear-gradient(160deg, token(colors.blue.400), token(colors.blue.400) 20%, token(colors.blue.500))',
        })}
      >
        <span
          className={css({
            display: 'inline-block',
            py: 2,
            px: 4,
            bg: 'linear-gradient(160deg, #4187f7, #2c76ee)',
            borderRadius: 8,
            boxShadow: 'inset 0 -2px 4px -4px rgba(29, 78, 216, 0.5)',
          })}
        >
          Click
        </span>
      </span>
    </button>
  );
};
