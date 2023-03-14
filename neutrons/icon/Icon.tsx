import React, { useState, useEffect } from "react";
import loadable from "@loadable/component";
import { Color, CommonProps, IconName, SizeX } from "@ui/types";
import { IndividualIconProps } from "./Icon.types";
import { colors } from "../colors/colors";
const Air = loadable(() => import("./svgs/Air"));
const AirFile = loadable(() => import("./svgs/AirFile"));
const AlertCircle = loadable(() =>
  import("react-feather").then((module) => ({ default: module.AlertCircle }))
);
const AlertTriangle = loadable(() =>
  import("react-feather").then((module) => ({ default: module.AlertTriangle }))
);
const ArrowDown = loadable(() =>
  import("react-feather").then((module) => ({ default: module.ArrowDown }))
);
const ArrowDownRight = loadable(() =>
  import("react-feather").then((module) => ({ default: module.ArrowDownRight }))
);
const ArrowLeft = loadable(() =>
  import("react-feather").then((module) => ({ default: module.ArrowLeft }))
);
const ArrowRight = loadable(() =>
  import("react-feather").then((module) => ({ default: module.ArrowRight }))
);
const ArrowUp = loadable(() =>
  import("react-feather").then((module) => ({ default: module.ArrowUp }))
);
const ArrowUpRight = loadable(() =>
  import("react-feather").then((module) => ({ default: module.ArrowUpRight }))
);
const BarChart = loadable(() =>
  import("react-feather").then((module) => ({ default: module.BarChart2 }))
);
const Briefcase = loadable(() =>
  import("react-feather").then((module) => ({ default: module.Briefcase }))
);
const BuildingEnvelope = loadable(() => import("./svgs/BuildingEnvelope"));
const Check = loadable(() =>
  import("react-feather").then((module) => ({ default: module.Check }))
);
const CheckCircle = loadable(() =>
  import("react-feather").then((module) => ({ default: module.CheckCircle }))
);
const ChevronDown = loadable(() =>
  import("react-feather").then((module) => ({ default: module.ChevronDown }))
);
const ChevronLeft = loadable(() =>
  import("react-feather").then((module) => ({ default: module.ChevronLeft }))
);
const ChevronRight = loadable(() =>
  import("react-feather").then((module) => ({ default: module.ChevronRight }))
);
const ChevronUp = loadable(() =>
  import("react-feather").then((module) => ({ default: module.ChevronUp }))
);
const Clock = loadable(() =>
  import("react-feather").then((module) => ({ default: module.Clock }))
);
const Code = loadable(() =>
  import("react-feather").then((module) => ({ default: module.Code }))
);
const Construction = loadable(() => import("./svgs/Construction"));
const Copy = loadable(() =>
  import("react-feather").then((module) => ({ default: module.Copy }))
);
const Crosshair = loadable(() =>
  import("react-feather").then((module) => ({ default: module.Crosshair }))
);
const DataQuality = loadable(() => import("./svgs/DataQuality"));
const DocumentFile = loadable(() => import("./svgs/DocumentFile"));
const DollarSign = loadable(() =>
  import("react-feather").then((module) => ({ default: module.DollarSign }))
);
const Download = loadable(() =>
  import("react-feather").then((module) => ({ default: module.Download }))
);
const Edit = loadable(() =>
  import("react-feather").then((module) => ({ default: module.Edit }))
);
const EllipsisVertical = loadable(() =>
  import("react-feather").then((module) => ({ default: module.MoreVertical }))
);
const ExposureIndex = loadable(() => import("./svgs/ExposureIndex"));
const ExcelFile = loadable(() => import("./svgs/ExcelFile"));
const ExcelFileColor = loadable(() => import("./svgs/ExcelFileColor"));
const ExternalLink = loadable(() =>
  import("react-feather").then((module) => ({ default: module.ExternalLink }))
);
const FileColor = loadable(() => import("./svgs/FileColor"));
const FileText = loadable(() =>
  import("react-feather").then((module) => ({ default: module.FileText }))
);
const Filter = loadable(() =>
  import("react-feather").then((module) => ({ default: module.Filter }))
);
const Fire = loadable(() => import("./svgs/Fire"));
const FloodRisk = loadable(() => import("./svgs/FloodRisk"));
const Folder = loadable(() =>
  import("react-feather").then((module) => ({ default: module.Folder }))
);
const Gear = loadable(() =>
  import("react-feather").then((module) => ({ default: module.Settings }))
);
const Globe = loadable(() =>
  import("react-feather").then((module) => ({ default: module.Globe }))
);
const Help = loadable(() =>
  import("react-feather").then((module) => ({ default: module.HelpCircle }))
);
const Home = loadable(() =>
  import("react-feather").then((module) => ({ default: module.Home }))
);
const Image = loadable(() =>
  import("react-feather").then((module) => ({ default: module.Image }))
);
const ImageFile = loadable(() => import("./svgs/ImageFile"));
const ImageFileColor = loadable(() => import("./svgs/ImageFileColor"));
const Info = loadable(() =>
  import("react-feather").then((module) => ({ default: module.Info }))
);
const Integration = loadable(() => import("./svgs/Integration"));
const Loader = loadable(() =>
  import("react-feather").then((module) => ({ default: module.Loader }))
);
const Lock = loadable(() =>
  import("react-feather").then((module) => ({ default: module.Lock }))
);
const LogOut = loadable(() =>
  import("react-feather").then((module) => ({ default: module.LogOut }))
);
const Map = loadable(() =>
  import("react-feather").then((module) => ({ default: module.Map }))
);
const MapPin = loadable(() =>
  import("react-feather").then((module) => ({ default: module.MapPin }))
);
const Message = loadable(() =>
  import("react-feather").then((module) => ({ default: module.MessageSquare }))
);
const Menu = loadable(() =>
  import("react-feather").then((module) => ({ default: module.Menu }))
);
const MinusSquare = loadable(() =>
  import("react-feather").then((module) => ({ default: module.MinusSquare }))
);
const Occupancy = loadable(() => import("./svgs/Occupancy"));
const PdfFile = loadable(() => import("./svgs/PdfFile"));
const PdfFileColor = loadable(() => import("./svgs/PdfFileColor"));
const Pencil = loadable(() =>
  import("react-feather").then((module) => ({ default: module.Edit2 }))
);
const PieChart = loadable(() =>
  import("react-feather").then((module) => ({ default: module.PieChart }))
);
const Play = loadable(() =>
  import("react-feather").then((module) => ({ default: module.Play }))
);
const Plus = loadable(() =>
  import("react-feather").then((module) => ({ default: module.Plus }))
);
const PlusCircle = loadable(() =>
  import("react-feather").then((module) => ({ default: module.PlusCircle }))
);
const PlusSquare = loadable(() =>
  import("react-feather").then((module) => ({ default: module.PlusSquare }))
);
const PowerpointFile = loadable(() => import("./svgs/PowerpointFile"));
const Property = loadable(() => import("./svgs/Property"));
const Rapid = loadable(() => import("./svgs/Rapid"));
const Refresh = loadable(() =>
  import("react-feather").then((module) => ({ default: module.RotateCw }))
);
const Rms = loadable(() => import("./svgs/Rms"));
const RmsFile = loadable(() => import("./svgs/RmsFile"));
const Search = loadable(() =>
  import("react-feather").then((module) => ({ default: module.Search }))
);
const Slash = loadable(() =>
  import("react-feather").then((module) => ({ default: module.Slash }))
);
const Sliders = loadable(() =>
  import("react-feather").then((module) => ({ default: module.Sliders }))
);
const Stewardship = loadable(() => import("./svgs/Stewardship"));
const Target = loadable(() =>
  import("react-feather").then((module) => ({ default: module.Target }))
);
const Tool = loadable(() =>
  import("react-feather").then((module) => ({ default: module.Tool }))
);
const Trash = loadable(() =>
  import("react-feather").then((module) => ({ default: module.Trash }))
);
const TrendingDown = loadable(() =>
  import("react-feather").then((module) => ({ default: module.TrendingDown }))
);
const Upload = loadable(() =>
  import("react-feather").then((module) => ({ default: module.Upload }))
);
const UploadCloud = loadable(() =>
  import("react-feather").then((module) => ({ default: module.UploadCloud }))
);
const User = loadable(() =>
  import("react-feather").then((module) => ({ default: module.User }))
);
const UserCheck = loadable(() =>
  import("react-feather").then((module) => ({ default: module.UserCheck }))
);
const Users = loadable(() =>
  import("react-feather").then((module) => ({ default: module.Users }))
);
const WordFileColor = loadable(() => import("./svgs/WordFileColor"));
const X = loadable(() =>
  import("react-feather").then((module) => ({ default: module.X }))
);
const ZipFile = loadable(() => import("./svgs/ZipFile"));
const ZoomIn = loadable(() =>
  import("react-feather").then((module) => ({ default: module.ZoomIn }))
);
const ZoomOut = loadable(() =>
  import("react-feather").then((module) => ({ default: module.ZoomOut }))
);

export interface IconProps extends CommonProps {
  /** The color of the icon */
  color?: Color;
  /** The fill color of the icon */
  fill?: Color;
  /** The name of the icon */
  name: IconName;
  /** The size of the icon */
  size?: SizeX;
}

export const Icon: React.FC<IconProps> = ({
  "data-testid": dataTestId,
  color,
  fill,
  name,
  size = "m",
}) => {
  const pixelSize = {
    xs: 8,
    s: 12,
    m: 16,
    l: 24,
    xl: 32,
    xxl: 40,
  };

  const initialProps: IndividualIconProps = {
    "data-testid":
      dataTestId ||
      `ui-atom-display-icon-${name
        .split(/(?=[A-Z])/)
        .join("-")
        .toLowerCase()}`,
    size: pixelSize[size],
  };

  const [props, setProps] = useState<IndividualIconProps>(initialProps);

  useEffect(() => {
    const finalProps: Partial<IndividualIconProps> = {};

    if (color) {
      finalProps.color = colors[color] as Color;
    }

    if (fill) {
      finalProps.fill = colors[fill] as Color;
    }

    setProps((prevState) => ({ ...prevState, ...finalProps }));
  }, []);

  switch (name) {
    case "air":
      return <Air {...props} />;
    case "airFile":
      return <AirFile {...props} />;
    case "alertCircle":
      return <AlertCircle {...props} />;
    case "alertTriangle":
      return <AlertTriangle {...props} />;
    case "arrowDown":
      return <ArrowDown {...props} />;
    case "arrowDownRight":
      return <ArrowDownRight {...props} />;
    case "arrowLeft":
      return <ArrowLeft {...props} />;
    case "arrowRight":
      return <ArrowRight {...props} />;
    case "arrowUp":
      return <ArrowUp {...props} />;
    case "arrowUpRight":
      return <ArrowUpRight {...props} />;
    case "barChart":
      return <BarChart {...props} />;
    case "buildingEnvelope":
      return <BuildingEnvelope {...props} />;
    case "briefcase":
      return <Briefcase {...props} />;
    case "check":
      return <Check {...props} />;
    case "checkCircle":
      return <CheckCircle {...props} />;
    case "chevronDown":
      return <ChevronDown {...props} />;
    case "chevronLeft":
      return <ChevronLeft {...props} />;
    case "chevronRight":
      return <ChevronRight {...props} />;
    case "chevronUp":
      return <ChevronUp {...props} />;
    case "clock":
      return <Clock {...props} />;
    case "code":
      return <Code {...props} />;
    case "construction":
      return <Construction {...props} />;
    case "copy":
      return <Copy {...props} />;
    case "crosshair":
      return <Crosshair {...props} />;
    case "dataQuality":
      return <DataQuality {...props} />;
    case "dollarSign":
      return <DollarSign {...props} />;
    case "documentFile":
      return <DocumentFile {...props} />;
    case "download":
      return <Download {...props} />;
    case "edit":
      return <Edit {...props} />;
    case "ellipsisVertical":
      return <EllipsisVertical {...props} />;
    case "exposureIndex":
      return <ExposureIndex {...props} />;
    case "excelFile":
      return <ExcelFile {...props} />;
    case "excelFileColor":
      return <ExcelFileColor {...props} />;
    case "externalLink":
      return <ExternalLink {...props} />;
    case "fileColor":
      return <FileColor {...props} />;
    case "fileText":
      return <FileText {...props} />;
    case "filter":
      return <Filter {...props} />;
    case "fire":
      return <Fire {...props} />;
    case "floodRisk":
      return <FloodRisk {...props} />;
    case "folder":
      return <Folder {...props} />;
    case "gear":
      return <Gear {...props} />;
    case "globe":
      return <Globe {...props} />;
    case "help":
      return <Help {...props} />;
    case "home":
      return <Home {...props} />;
    case "image":
      return <Image {...props} />;
    case "imageFile":
      return <ImageFile {...props} />;
    case "imageFileColor":
      return <ImageFileColor {...props} />;
    case "info":
      return <Info {...props} />;
    case "integration":
      return <Integration {...props} />;
    case "loader":
      return <Loader {...props} />;
    case "lock":
      return <Lock {...props} />;
    case "logOut":
      return <LogOut {...props} />;
    case "map":
      return <Map {...props} />;
    case "mapPin":
      return <MapPin {...props} />;
    case "menu":
      return <Menu {...props} />;
    case "message":
      return <Message {...props} />;
    case "minusSquare":
      return <MinusSquare {...props} />;
    case "occupancy":
      return <Occupancy {...props} />;
    case "pdfFile":
      return <PdfFile {...props} />;
    case "pdfFileColor":
      return <PdfFileColor {...props} />;
    case "pencil":
      return <Pencil {...props} />;
    case "pieChart":
      return <PieChart {...props} />;
    case "play":
      return <Play {...props} />;
    case "plus":
      return <Plus {...props} />;
    case "plusCircle":
      return <PlusCircle {...props} />;
    case "plusSquare":
      return <PlusSquare {...props} />;
    case "powerpointFile":
      return <PowerpointFile {...props} />;
    case "property":
      return <Property {...props} />;
    case "rapid":
      return <Rapid {...props} />;
    case "refresh":
      return <Refresh {...props} />;
    case "rms":
      return <Rms {...props} />;
    case "rmsFile":
      return <RmsFile {...props} />;
    case "search":
      return <Search {...props} />;
    case "slash":
      return <Slash {...props} />;
    case "sliders":
      return <Sliders {...props} />;
    case "stewardship":
      return <Stewardship {...props} />;
    case "target":
      return <Target {...props} />;
    case "tool":
      return <Tool {...props} />;
    case "trash":
      return <Trash {...props} />;
    case "trendingDown":
      return <TrendingDown {...props} />;
    case "upload":
      return <Upload {...props} />;
    case "uploadCloud":
      return <UploadCloud {...props} />;
    case "user":
      return <User {...props} />;
    case "userCheck":
      return <UserCheck {...props} />;
    case "users":
      return <Users {...props} />;
    case "wordFileColor":
      return <WordFileColor {...props} />;
    case "x":
      return <X {...props} />;
    case "zipFile":
      return <ZipFile {...props} />;
    case "zoomIn":
      return <ZoomIn {...props} />;
    case "zoomOut":
      return <ZoomOut {...props} />;
    default:
      throw new Error(`unexpected icon type: ${name}`);
  }
};
