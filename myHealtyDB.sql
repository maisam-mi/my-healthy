--
-- PostgreSQL database dump
--

-- Dumped from database version 15.3
-- Dumped by pg_dump version 15.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: person; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.person (
    pid integer NOT NULL,
    firstname character varying(50) NOT NULL,
    lastname character varying(50) NOT NULL,
    email character varying(100) NOT NULL,
    password character varying(100) NOT NULL,
    birthdate date,
    height numeric(3,0),
    weight numeric(6,2)
);


ALTER TABLE public.person OWNER TO postgres;

--
-- Name: person_pid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.person_pid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.person_pid_seq OWNER TO postgres;

--
-- Name: person_pid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.person_pid_seq OWNED BY public.person.pid;


--
-- Name: records; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.records (
    rid integer NOT NULL,
    traveldistance numeric(10,2),
    runnedtime time without time zone,
    calories integer,
    pid integer NOT NULL,
    runneddate date
);


ALTER TABLE public.records OWNER TO postgres;

--
-- Name: records_pid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.records_pid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.records_pid_seq OWNER TO postgres;

--
-- Name: records_pid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.records_pid_seq OWNED BY public.records.pid;


--
-- Name: records_rid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.records_rid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.records_rid_seq OWNER TO postgres;

--
-- Name: records_rid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.records_rid_seq OWNED BY public.records.rid;


--
-- Name: person pid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.person ALTER COLUMN pid SET DEFAULT nextval('public.person_pid_seq'::regclass);


--
-- Name: records rid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.records ALTER COLUMN rid SET DEFAULT nextval('public.records_rid_seq'::regclass);


--
-- Name: records pid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.records ALTER COLUMN pid SET DEFAULT nextval('public.records_pid_seq'::regclass);


--
-- Data for Name: person; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.person (pid, firstname, lastname, email, password, birthdate, height, weight) FROM stdin;
2	Jane	Smith	jane@gmail.com	Jane1985!	1985-08-22	165	63.20
4	Bob	Williams	bob@gmail.com	Bob1988!	1988-11-30	175	80.10
1	John	Doe	john@gmail.com	john1190!	1991-05-15	183	73.00
\.


--
-- Data for Name: records; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.records (rid, traveldistance, runnedtime, calories, pid, runneddate) FROM stdin;
1	2.00	00:40:00	3000	1	2024-02-17
2	1.00	00:25:00	1400	1	2024-02-18
3	3.00	00:30:00	1800	1	2024-02-19
4	4.00	00:45:00	2000	1	2024-02-20
5	3.00	00:25:00	1800	1	2024-02-21
6	3.40	00:35:30	3400	1	2024-02-23
7	6.00	01:00:00	5000	2	2004-03-30
8	6.00	01:00:00	5000	2	2004-03-31
\.


--
-- Name: person_pid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.person_pid_seq', 9, true);


--
-- Name: records_pid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.records_pid_seq', 1, false);


--
-- Name: records_rid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.records_rid_seq', 8, true);


--
-- Name: person person_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.person
    ADD CONSTRAINT person_pkey PRIMARY KEY (pid);


--
-- Name: records records_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.records
    ADD CONSTRAINT records_pkey PRIMARY KEY (rid);


--
-- Name: person unique_email_id; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.person
    ADD CONSTRAINT unique_email_id UNIQUE (email);


--
-- Name: records records_pid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.records
    ADD CONSTRAINT records_pid_fkey FOREIGN KEY (pid) REFERENCES public.person(pid);


--
-- PostgreSQL database dump complete
--

