import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Tooltip, TooltipProps } from "@mui/material";
import dragIcon from "@izui/assets/images/icons/hand-drag.png";

import { Forward, Image } from "@/components";
import { preventDefault } from "@/utils/events";

/**
 * Drag me hint.
 */
const HintDrag: FC<Partial<TooltipProps>> = (props) =>
{
	const { t } = useTranslation();

	return (
		<Tooltip placement="right" title={t("PROJECT_TOOLTIP_DRAG") as string}
			arrow disableFocusListener disableTouchListener {...props}>
			<Forward>
				<Image onDragStart={preventDefault} alt="drag" src={dragIcon} />
			</Forward>
		</Tooltip>
	);
};

export default HintDrag;
