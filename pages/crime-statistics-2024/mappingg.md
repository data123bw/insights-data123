


```sql district_map
with district_map as (

    -- Gaborone stands alone
    select 'GABORONE' as district_name,
           sum(total) as total
    from insights.district_crime
    where district_name = 'Gaborone'

    union all

    -- Mogoditshane + Ramotswa (South East)
    select 'SOUTH EAST',
           sum(total)
    from insights.district_crime
    where district_name = 'Mogoditshane'

    union all

    -- Francistown + Kutlwano
    select 'FRANCISTOWN',
           sum(total)
    from insights.district_crime
    where district_name in ('Francistown','Kutlwano')

    union all

    -- Masunga (North East)
    select 'NORTH EAST',
           sum(total)
    from insights.district_crime
    where district_name = 'Francistown'

    union all

    select 'LOBATSE',
           sum(total)
    from insights.district_crime
    where district_name = 'Lobatse'

    union all

    select 'SELIBE PHIKWE',
           sum(total)
    from insights.district_crime
    where district_name = 'S/Phikwe'

    union all

    select 'CHOBE',
           sum(total)
    from insights.district_crime
    where district_name = 'Kasane'

    union all

    select 'GHANZI',
           sum(total)
    from insights.district_crime
    where district_name = 'Gantsi'

    union all

    select 'KGALAGADI',
           sum(total)
    from insights.district_crime
    where district_name = 'Tsabong'

    union all

    select 'KGATLENG',
           sum(total)
    from insights.district_crime
    where district_name = 'Mochudi'

    union all

    select 'KWENENG',
           sum(total)
    from insights.district_crime
    where district_name = 'Molepolole'

    union all

    select 'SOUTHERN',
           sum(total)
    from insights.district_crime
    where district_name = 'Kanye'

    union all

    select 'SOWA TOWN',
           sum(total)
    from insights.district_crime
    where district_name = 'Kanye'

    union all

    select 'NORTH WEST',
           sum(total)
    from insights.district_crime
    where district_name in ('Maun','Shakawe')

    union all

    select 'CENTRAL',
           sum(total)
    from insights.district_crime
    where district_name in ('Palapye','Mahalapye','Letlhakane')

    union all

    select 'JWANENG',
           sum(total)
    from insights.district_crime
    where district_name = 'Letlhakane'

)

select *
from district_map
order by total desc

```

{#if district_map.ready}
<BotswanaMap
    data={district_map}
    areaCol='district_name'
    value='total'
    height={600}
/>
{/if}


