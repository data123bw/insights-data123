SELECT 'All Divisions' AS division, 0 AS sort_order
UNION ALL
SELECT DISTINCT division, 1 AS sort_order
FROM crime.crime_by_division_annual
ORDER BY sort_order, division
