import * as React from "react";
import "./styles.css";

export { OctopusIcon, PlatformIcon } from "./Icons";

type DivProps = React.HTMLAttributes<HTMLDivElement>;
const cx = (...c: Array<string | false | undefined>) => c.filter(Boolean).join(" ");

/** Raiz: aplica fonte, cores e fundo azul da campanha. */
export const PrioRoot = ({ className, ...rest }: DivProps) => (
  <div className={cx("prio-root", className)} {...rest} />
);

/** Palco blueprint: azul elétrico com grade de planta técnica. */
export const Stage = ({ className, ...rest }: DivProps) => (
  <section className={cx("prio-stage", className)} {...(rest as React.HTMLAttributes<HTMLElement>)} />
);

/** Título da campanha: PROGRAMA DE / ESTÁGIO / 2027. */
export const Lockup = ({ year = "2027", warp = true }: { year?: string; warp?: boolean }) => (
  <div className={cx("prio-lockup", warp && "warp-title")}>
    <p className="t-programa">Programa de</p>
    <h1 className="t-estagio">Estágio</h1>
    <p className="t-ano prio-lockup__ano">{year}</p>
  </div>
);

/** Selo verde neon. Use um único destaque verde sólido por composição. */
export const Sticker = ({ year = "2027", label = "Atitude para ir além" }: { year?: string; label?: string }) => (
  <div className="prio-sticker paper-lime">
    <span className="prio-sticker__year">{year}</span>
    <span className="prio-sticker__label">{label}</span>
  </div>
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "outline" | "solid" };
export const Button = ({ variant = "outline", className, ...rest }: ButtonProps) => (
  <button className={cx("prio-button", variant === "solid" && "prio-button--solid", className)} {...rest} />
);

type CardProps = Omit<React.HTMLAttributes<HTMLElement>, "title"> & { title?: React.ReactNode; tone?: "blue" | "lime" };
export const Card = ({ title, tone = "blue", className, children, ...rest }: CardProps) => (
  <article className={cx("prio-card", tone === "lime" && "prio-card--lime paper-lime", className)} {...rest}>
    {title && <h3 className="prio-card__title">{title}</h3>}
    <div className="prio-card__body">{children}</div>
  </article>
);

/** Etapas do processo seletivo, numeradas porque a ordem importa. */
export const Steps = ({ items }: { items: Array<{ title: string; text?: string }> }) => (
  <ol className="prio-steps">
    {items.map((s) => (
      <li key={s.title}>
        <div>
          <h4 className="prio-steps__title">{s.title}</h4>
          {s.text && <p className="prio-steps__text">{s.text}</p>}
        </div>
      </li>
    ))}
  </ol>
);
