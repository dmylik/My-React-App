export const windWhere = (dec) => {
    if (dec >= 0 && dec < 23) return 'N'
    if (dec >= 23 && dec < 67) return 'NE'
    if (dec >= 67 && dec < 112) return 'E'
    if (dec >= 112 && dec < 158) return 'SE'
    if (dec >= 158 && dec < 202) return 'S'
    if (dec >= 202 && dec < 248) return 'SW'
    if (dec >= 248 && dec < 315) return 'W'
    if (dec >= 315 && dec < 337) return 'NW'
    if (dec >= 337 && dec < 360) return 'N'
}