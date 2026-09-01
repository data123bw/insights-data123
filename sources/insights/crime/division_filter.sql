-- Division dropdown values for the 2024 crime report edition.
SELECT 'All Divisions' AS division, 0 AS sort_order
UNION ALL
SELECT DISTINCT division, 1 AS sort_order
FROM crime.crime_by_division_annual
WHERE report_year = 2024
ORDER BY sort_order, division
