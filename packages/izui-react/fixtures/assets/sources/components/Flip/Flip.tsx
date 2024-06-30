import { FC } from "react";
import { Flip, Image } from "@izui/react";

import nature1 from "@/fixtures/assets/images/background/nature1.jpg";
import nature2 from "@/fixtures/assets/images/background/nature2.jpg";

const FlipDemo: FC = () => <Flip front={<Image src={nature1} />} back={<Image src={nature2} />} />;

export default FlipDemo;
