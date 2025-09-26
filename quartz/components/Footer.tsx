import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"
// @ts-ignore
import script from "./scripts/_randomPage.inline"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    return (
      // Added a class to the footer so that I can query it for pageup/down
      <footer class={`${displayClass ?? ""} footer`}>
        <p>
          {i18n(cfg.locale).components.footer.createdWith}{" "}
          <a href="https://quartz.jzhao.xyz/">Quartz v{version}</a> © {year}
        </p>
        <ul>
          {Object.entries(links).map(([text, link]) => (
            <li>
              <a href={link}>{text}</a>
            </li>
          ))}
        </ul>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <ul>
            <li>
              <a href="#">Scroll to top ↑</a>
            </li>
            <li>
              <a id="random-page-button">Random Page 🎲</a>
            </li>
          </ul>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <a href="https://webring.wonderful.software#supakorn.info" title="วงแหวนเว็บ">
              <img
                alt="วงแหวนเว็บ"
                width="24"
                height="24"
                src="https://webring.wonderful.software/webring.svg"
              />
            </a>
          </div>
        </div>
      </footer>
    )
  }

  Footer.css = style
  Footer.afterDOMLoaded = script
  return Footer
}) satisfies QuartzComponentConstructor
