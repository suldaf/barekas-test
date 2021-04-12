export function setFullYear(value) {
  const year = value.getFullYear();
  const month = value.getMonth();
  const day = value.getDate();
  switch (month) {
    case 1:
      return `${day} January ${year}`;

    case 2:
      return `${day} February ${year}`;

    case 3:
      return `${day} March ${year}`;

    case 4:
      return `${day} April ${year}`;

    case 5:
      return `${day} May ${year}`;

    case 6:
      return `${day} June ${year}`;

    case 7:
      return `${day} July ${year}`;

    case 8:
      return `${day} August ${year}`;

    case 9:
      return `${day} September ${year}`;

    case 10:
      return `${day} October ${year}`;

    case 11:
      return `${day} November ${year}`;

    case 12:
      return `${day} December ${year}`;

    default:
      break;
  }
}

export function setMonth(value) {
  switch (value) {
    case 1:
      return `January`;

    case 2:
      return `February`;

    case 3:
      return `March`;

    case 4:
      return `April`;

    case 5:
      return `May`;

    case 6:
      return `June`;

    case 7:
      return `July`;

    case 8:
      return `August`;

    case 9:
      return `September`;

    case 10:
      return `October`;

    case 11:
      return `November`;

    case 12:
      return `December`;

    default:
      break;
  }
}
