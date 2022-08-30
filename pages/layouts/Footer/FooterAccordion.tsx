import Link from "next/link";
import { Accordion, AccordionTab } from "primereact/accordion";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { footerList } from "../../data";

function FooterAccordion() {
  return (
    <Accordion
      multiple
      className="footer-accordion-list"
      expandIcon={<IoIosArrowDown />}
      collapseIcon={<IoIosArrowUp />}
    >
      {footerList.map((item) => (
        <AccordionTab key={item.id} header={item.title} className="footer-item">
          <ul className="footer-content-list">
            {item.contents.map((content, index) => (
              <li key={index} className="footer-content-item">
                {item.title === "contact" ? (
                  <p>{content}</p>
                ) : (
                  <Link href="#">
                    <a>{content}</a>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </AccordionTab>
      ))}
    </Accordion>
  );
}

export default FooterAccordion;
